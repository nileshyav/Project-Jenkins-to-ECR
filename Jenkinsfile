
pipeline {
    agent any
    
    stages{
        stage("Clone"){
            steps{
                git 'https://github.com/nileshyav/simple-express-app.git'
                
            }
        }
        stage("Build"){
            steps{
                script{
                    app = docker.build('jenkins-test')
                }
                
            }  
            }
        stage("Push to Ecr"){
            steps{
                script{
                    docker.withRegistry("https://315761860206.dkr.ecr.us-east-1.amazonaws.com", "ecr:us-east-1:aws-auth") {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
}
                }

            }
        }
        
    }
}
