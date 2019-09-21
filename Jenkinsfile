pipeline {
  agent{
    docker {

    }
  }
}

node {
  stage('Checkout') {
      //disable to recycle workspace data to save time/bandwidth
      deleteDir()
      checkout scm

      //enable for commit id in build number
      //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
      //env.git_commit_id_short = env.git_commit_id.take(7)
      //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
  }

  stage('NPM Install') {
      withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
          sh 'npm install'
      }
  }

  stage('Test') {
      withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
        sh 'npm run test --progress=false --watch false'
      }
      junit '**/test-results.xml'
  }

  stage('Lint') {
      sh 'npm run lint'
  }

  stage('Build') {
      milestone()
      sh 'npm run build --prod --aot --sm --progress=false'
  }

  // stage('Archive') {
  //     sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
  //     archive 'dist.tar.gz'
  // }

  stage('Docker build') {
    milestone()
    // sh 'docker build -t curriculum .'
    def image = docker.build("curriculum:${env.BUILD_ID}")
    image.push()
    image.push("latest")
  }

  // stage('Deploy') {
  //     milestone()
  //     echo "Deploying..."
  //     docker.withRegistry('obyoxar', 'docker-private-credentials') {
  //       app.push("${env.BUILD_NUMBER}")
  //       app.push("latest")
  //     }
  // }
}
