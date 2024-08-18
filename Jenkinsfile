pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'xis-app'
        AWS_REGION = 'us-east-1'
        ECR_REPOSITORY = '339712971762.dkr.ecr.us-east-1.amazonaws.com/exis-app'
        ECR_LOGIN_URL = '339712971762.dkr.ecr.us-east-1.amazonaws.com'
         AWS_CREDENTIALS_ID = 'aws-trinidad'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Login to ECR') {
            steps {
                bat '''
                aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %ECR_LOGIN_URL%
                '''
            }
        }
        
        stage('Tag Docker Image') {
            steps {
                script {
                    
                    bat "docker tag ${DOCKER_IMAGE_NAME}:latest ${ECR_REPOSITORY}:latest"
                }
            }
        }
        
        stage('Push Docker Image to ECR') {
            steps {
                script {
                
                    bat "docker push ${ECR_REPOSITORY}:latest"
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
