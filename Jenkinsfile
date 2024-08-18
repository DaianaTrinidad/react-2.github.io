pipeline {
    agent any

    environment {
        ECR = "exis-app"

    }

    stages {
        stage('deploy to ECR') {
            steps {
                withAWS(credentials 'aws-trinidad', region: 'us-east-1'){
                    bat 'aws ecr sync ecr://$ecr --exclude ".git/*"'
                    bat 'aws ecr ls ecr://$ecr'
                }
            }
        }
    }
}

    