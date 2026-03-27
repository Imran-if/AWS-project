variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "artifact_bucket_name" {
  description = "Globally unique S3 bucket name for CI/CD artifacts"
  type        = string
}
