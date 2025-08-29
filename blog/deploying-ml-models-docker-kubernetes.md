---
title: "From Python to Production: Deploying ML Models with Docker and Kubernetes"
date: "2024-07-28"
author: "Sami Halawa"
summary: "A practical guide on taking a trained machine learning model from a Jupyter Notebook to a scalable, production-ready microservice using FastAPI, Docker, and Kubernetes."
slug: "deploying-ml-models-docker-kubernetes"
---

## The Last Mile Problem in Machine Learning

You've trained a brilliant machine learning model. It performs with high accuracy on your test set, and you're ready to change the world with it. But how do you get it from your local machine into a robust, scalable application that can serve thousands of users? This is the "last mile" of machine learning, and it's where many projects stumble.

This guide will walk you through a standard, powerful stack for deploying ML models as microservices: **FastAPI** for the API, **Docker** for containerization, and **Kubernetes** for orchestration.

## 1. Wrapping the Model in an API with FastAPI

First, we need to expose our model's prediction function via a web API. FastAPI is an excellent choice due to its high performance and automatic documentation.

```python
# main.py
from fastapi import FastAPI
import joblib

# Load your trained model
model = joblib.load("my_model.pkl")

app = FastAPI()

@app.post("/predict")
def predict(data: dict):
    # Assume 'data' is a dictionary with the features your model needs
    features = [data['feature1'], data['feature2']]
    prediction = model.predict([features])
    return {"prediction": prediction[0]}

@app.get("/health")
def health_check():
    return {"status": "ok"}
```

## 2. Containerizing with Docker

Next, we'll package our FastAPI application and its dependencies into a Docker container. This ensures it runs consistently across any environment.

Create a `requirements.txt` file:
```
fastapi
uvicorn
scikit-learn
joblib
```

Create a `Dockerfile`:
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Run the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and test the image locally:
```bash
docker build -t ml-service .
docker run -p 8000:8000 ml-service
```

## 3. Orchestrating with Kubernetes

Finally, we'll deploy our container to a Kubernetes cluster for scalability, reliability, and easy management. This requires a Kubernetes cluster (like GKE, EKS, or even a local one like Minikube).

Create a `deployment.yaml` file:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ml-service-deployment
spec:
  replicas: 3 # Start with 3 instances for high availability
  selector:
    matchLabels:
      app: ml-service
  template:
    metadata:
      labels:
        app: ml-service
    spec:
      containers:
      - name: ml-service
        image: your-docker-registry/ml-service:latest
        ports:
        - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: ml-service
spec:
  type: LoadBalancer
  selector:
    app: ml-service
  ports:
  - port: 80
    targetPort: 8000
```
This configuration defines a deployment that will maintain 3 running instances (replicas) of our container and a service that exposes them to the internet via a load balancer.

Deploy it using `kubectl`:
```bash
kubectl apply -f deployment.yaml
```

## Conclusion

You've now taken a model from a pickle file to a scalable, production-ready microservice. This FastAPI -> Docker -> Kubernetes pipeline is a powerful and standard pattern for MLOps. It provides the isolation, consistency, and scalability needed to serve real-world applications reliably.