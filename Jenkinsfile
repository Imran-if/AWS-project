pipeline {
  agent any

  environment {
    IMAGE_NAME = 'YOUR_DOCKERHUB_USERNAME/devops-demo'
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    KUBE_CONFIG = credentials('kubeconfig')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/YOUR_GITHUB_USERNAME/devops-jenkins-k8s-demo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci --prefix app'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint --prefix app'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test --prefix app'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -t ${IMAGE_NAME}:latest .'
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push ${IMAGE_NAME}:${IMAGE_TAG}
            docker push ${IMAGE_NAME}:latest
          '''
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          export KUBECONFIG=$KUBE_CONFIG
          kubectl apply -f k8s/deployment.yaml
          kubectl apply -f k8s/service.yaml
          kubectl rollout status deployment/devops-demo
        '''
      }
    }
  }
}
