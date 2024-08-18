pipeline {
    agent any

    environment {
        ECR = "exis-app"
    }

    stages {
        stage('Deploy to ECR') {
            steps {
                withAWS(credentials: 'aws-trinidad', region: 'us-east-1') {
                    bat 'aws ecr sync ecr://%ECR% --exclude ".git/*"'
                    bat 'aws ecr ls ecr://%ECR%'
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

    