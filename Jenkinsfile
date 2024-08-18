pipeline {
    agent any

    environment {
        ECR = "exis-app"
    
    }

    stages {
        stage('init') {
            agent{
                docker {
                    image 'node:xis-app'
                    arg '-u root:root'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        
        stage('test') {
            agent{
                docker {
                    image 'node:xis-app'
                    arg '-u root:root'
                }
            }
            steps {
                sh 'npm run test'
            }
        }
        
        stage('build') {
            agent{
                docker {
                    image 'node:xis-app'
                    arg '-u root:root'
                }
            }
            steps {
                sh 'npm run build'
    
            }
        }
        
        stage('deploy') {
            steps {
                withAWS(credentials: 'aws-trinidad', region: 'us-east-1') {
                    sh 'aws ecr sync . ecr://$repositorio --exclude ".git/*'
                    sh 'aws s3 ls ecr://$repositorio'
                }
            }
        }
    }
    
    
}
