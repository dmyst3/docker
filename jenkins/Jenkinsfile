pipeline {
    agent {dockerfile true}
    environment{
        t = "hello"
    }

    stages{
        stage("test"){
            steps{
                println t
            }
        }
    }
}