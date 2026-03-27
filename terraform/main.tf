terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "artifact_store" {
  bucket = var.artifact_bucket_name

  tags = {
    Project = "devops-jenkins-k8s-demo"
  }
}
