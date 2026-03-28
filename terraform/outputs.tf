output "artifact_bucket_name" {
  description = "Name of the S3 artifact bucket"
  value       = aws_s3_bucket.artifact_store.bucket
}
output "jenkins_url" {
  value = "http://${aws_instance.jenkins_server.public_ip}:8080"
}
