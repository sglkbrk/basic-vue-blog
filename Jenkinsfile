node {
    stage('Git Pull') {
        git branch: 'master',
        credentialsId: '7fa7564c-3e50-4b8a-8988-83d2bdf242f6',
        url: 'https://github.com/sglkbrk/vue-blog.git'
    }
    stage('SonarQube analysis') {
        withSonarQubeEnv() {
            def sonarqubeScannerHome = tool name: 'SonarScanner 4.0'
            sh "${sonarqubeScannerHome}/bin/sonar-scanner"
        }
    }
    stage("SonarQube analysis sonuç"){
      timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
        def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
        if (qg.status != 'OK') {
          error "Pipeline aborted due to quality gate failure: ${qg.status}"
        }
      }
    }
    stage('build') {
        sh "docker-compose build"
    }
    stage('start') {
        sh "docker-compose down"
        sh "docker-compose up -d"
    }
}
