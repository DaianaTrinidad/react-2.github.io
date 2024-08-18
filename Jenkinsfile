pipeline {
    agent any

    environment {
        ECR = "exis-app"
        DOCKER_IMAGE = "node:18" // Usa una imagen base adecuada desde Docker Hub
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm run test'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: 'https://index.docker.io/v1/']) {
                    script {
                        docker.image(DOCKER_IMAGE).inside {
                            sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        }
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'docker build -t $DOCKER_USERNAME/$ECR:latest .'
                        sh 'docker push $DOCKER_USERNAME/$ECR:latest'
                    }
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
