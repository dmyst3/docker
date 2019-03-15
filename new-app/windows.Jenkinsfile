

pipeline{
    agent any


    parameters{
        string(name: 'version', defaultValue: '', description: 'The image will be tagged with this version')
    }
    environment{
        myVer = "${param.version}"
    }


    stages{
        stage('Build Docker Image'){
            steps{
                script{
                    //Naviage to the app directory will be removed once app is move to github
                    dir('C:/Users/abacc/Desktop/dockerfile'){
                        //Create Image
                        bat "docker build -t apache:${env.myVer} ."
                    }
                }
            }
            post{
                failure{
                    echo 'Build Docker Image failed'
                }
            }
        }

        stage('Push Image to Docker Hub'){
            steps{
                script{
                    //Tag image
                    bat "docker tag apache:${env.myVer} abacchus/apache:${env.myVer}"
                    
                    //Login to docker hub
                    bat 'docker login --username abacchus --password XXxxxxxx'
                    
                    //Push image to docker hub
                    bat "docker push abacchus/apache:${env.myVer}"
                }
            }
            post{
                failure{
                    echo 'Pushing image to docker hub failed'
                }
            }
        }

        stage('Invoke Kubernetes'){
            steps{
                script{
                    //Simple command to check if Kubernets is up
                    bat 'kubectl get deployments'
                }
            }
        }
    }
    
}
