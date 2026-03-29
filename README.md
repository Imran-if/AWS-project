# 🚀 DevOps Jenkins + Kubernetes Project

## 📌 Overview

This project demonstrates an end-to-end DevOps pipeline using:

- Jenkins (CI/CD)
- Docker (Containerization)
- Kubernetes (Deployment)
- Terraform (Infrastructure as Code)
- Prometheus + Grafana (Monitoring)

## 🧑‍💻 Application

A Node.js demo app with:

- UI interface
- Health endpoint (`/health`)
- Metrics endpoint (`/metrics`)

## ⚙️ CI/CD Flow

GitHub → Jenkins → Docker → Docker Hub → Kubernetes

Pipeline stages in `Jenkinsfile`:

1. Checkout
2. Install dependencies (`npm ci`)
3. Lint (`npm run lint`)
4. Test (`npm test`)
5. Build image
6. Push image
7. Deploy to Kubernetes

## 🐳 Run Locally

```bash
docker build -t devops-demo .
docker run -p 3000:3000 devops-demo
```

## ☸️ Kubernetes Deployment

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
```

## ☁️ Terraform (IaC)

```bash
cd terraform
terraform init
terraform apply \
  -var='key_pair_name=YOUR_KEY_PAIR' \
  -var='artifact_bucket_name=YOUR_UNIQUE_BUCKET_NAME'
```

### Provisioned resources

- Networking/security: security group for SSH (22) and Jenkins (8080)
- Compute: EC2 instance for Jenkins
- Storage: S3 bucket for artifacts

## 📈 Monitoring

Basic monitoring is included with Prometheus + Grafana:

1. Start all services:

```bash
docker compose up -d --build
```

2. Open:
   - App: `http://localhost:3000`
   - Prometheus: `http://localhost:9090`
   - Grafana: `http://localhost:3001`

3. In Grafana, add a Prometheus data source with URL: `http://prometheus:9090`

The app exposes `app_requests_total` at `/metrics`, and Prometheus scrapes it every 15 seconds.

## 🔐 Sensitive Information Safety Checklist

This repository intentionally avoids committing secrets. It uses placeholders for values that must be replaced in your own environment:

- `YOUR_GITHUB_USERNAME` in `Jenkinsfile`
- `YOUR_DOCKERHUB_USERNAME` in `Jenkinsfile` and `k8s/deployment.yaml`
- Terraform runtime variables for:
  - `key_pair_name`
  - `artifact_bucket_name`

### Important recommendations

- Do **not** commit cloud credentials, kubeconfig files, or Docker Hub passwords.
- Store credentials only in Jenkins Credentials (or your CI secret manager).
- Change Grafana default credentials (`admin/admin`) before exposing it outside local development.
