pipeline {
    agent any

    environment {
        // Variables de entorno
        DOCKER_IMAGE_NAME = 'xis-app' // Nombre de la imagen Docker existente
        AWS_REGION = 'us-east-1' // Región de AWS
        ECR_REPOSITORY = '339712971762.dkr.ecr.us-east-1.amazonaws.com/exis-app' // URL del repositorio en ECR
        ECR_LOGIN_URL = "339712971762.dkr.ecr.us-east-1.amazonaws.com"
    }

    stages {
        stage('Login to ECR') {
            steps {
                script {
                    // Login a AWS ECR para Windows
                    bat '''
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_LOGIN_URL}
                    '''
                }
            }
        }
        
        stage('Tag Docker Image') {
            steps {
                script {
                    // Etiquetar la imagen Docker para ECR en Windows
                    bat "docker tag ${DOCKER_IMAGE_NAME}:latest ${ECR_REPOSITORY}:latest"
                }
            }
        }
        
        stage('Push Docker Image to ECR') {
            steps {
                script {
                    // Subir la imagen a ECR en Windows
                    bat "docker push ${ECR_REPOSITORY}:latest"
                }
            }
        }
    }
    
    post {
        always {
            // Limpiar recursos después de la construcción
            cleanWs()
        }
    }
}
