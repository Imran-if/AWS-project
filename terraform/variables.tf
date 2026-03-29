variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the Jenkins server"
  type        = string
  default     = "ami-xxxxxxxxxxxxxxxxx"
}

variable "instance_type" {
  description = "EC2 instance type for the Jenkins server"
  type        = string
  default     = "t3.micro"
}

variable "key_pair_name" {
  description = "Name of an existing AWS key pair for SSH access"
  type        = string
}

variable "artifact_bucket_name" {
  description = "Globally unique S3 bucket name for CI/CD artifacts"
  type        = string
}
