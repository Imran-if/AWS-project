# 🚀 DevOps Jenkins + Kubernetes Project

## 📌 Overview

This project demonstrates an end-to-end DevOps pipeline using:

- Jenkins (CI/CD)
- Docker (Containerization)
- Kubernetes (Deployment)
- Terraform (Infrastructure as Code)

## 🧑‍💻 Application

A Node.js demo app with:

- UI interface
- Health endpoint (`/health`)
- Metrics endpoint (`/metrics`)

## ⚙️ CI/CD Flow

GitHub → Jenkins → Docker → Docker Hub → Kubernetes

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

## ☁️ Terraform

```bash
cd terraform
terraform init
terraform apply
```

## 🌐 Access

`http://<NODE_IP>:30007`
<img width="1688" height="952" alt="Screenshot 2026-03-27 230440" src="https://github.com/user-attachments/assets/e10944e3-4498-4bd7-b45f-48fa8a0776f7" />






## 🔧 Required Placeholder Updates

Before using the pipeline, replace these placeholders:

- `YOUR_GITHUB_USERNAME` in `Jenkinsfile`
- `YOUR_DOCKERHUB_USERNAME` in `Jenkinsfile` and `k8s/deployment.yaml`
