pipeline {
    agent any

    environment {
        ECR = "339712971762.dkr.ecr.us-east-1.amazonaws.com/exis-app"
        AWS_REGION = "us-east-1"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DaianaTrinidad/react-2.github.io.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm run test'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Login to ECR') {
            steps {
                script {
                    withAWS(credentials: 'aws-trinidad', region: AWS_REGION) {
                        sh 'aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR'
                    }
                }
            }
        }
        
        stage('Push Docker Image to ECR') {
            steps {
                script {
                    docker.build("xis-app").push("latest")
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
