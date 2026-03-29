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





## 📈 Monitoring 

Basic monitoring is included with Prometheus + Grafana:

1. Start all services:

```bash
docker compose up -d --build
```

2. Open:
   - App: `http://localhost:3000`
   - Prometheus: `http://localhost:9090`
   - Grafana: `http://localhost:3001` (default login: `admin` / `admin`)

3. In Grafana, add a Prometheus data source with URL: `http://prometheus:9090`

The app exposes `app_requests_total` at `/metrics`, and Prometheus is preconfigured to scrape it every 15 seconds.


## 🔧 Required Placeholder Updates

Before using the pipeline, replace these placeholders:

- `YOUR_GITHUB_USERNAME` in `Jenkinsfile`
- `YOUR_DOCKERHUB_USERNAME` in `Jenkinsfile` and `k8s/deployment.yaml`
