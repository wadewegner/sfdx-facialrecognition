source heroku-config

sfdx heroku:pipelines:setup $pipelineName $repo -y

sfdx heroku:pipelines:add $pipelineName --app $stagingName --stage staging
sfdx heroku:pipelines:add $pipelineName --app $prodName --stage production

sfdx heroku:buildpacks:add https://github.com/heroku/salesforce-buildpack --app $stagingName
sfdx heroku:buildpacks:add https://github.com/heroku/salesforce-buildpack --app $prodName

sfdx heroku:addons:create salesforce:standard --app $stagingName
sfdx heroku:addons:create salesforce:standard --app $prodName

prodUrl=`sfdx force:org:describe -u $prodUsername --json | jq -r .sfdxAuthUrl`
testUrl=`sfdx force:org:describe -u $testUsername --json | jq -r .sfdxAuthUrl`
hubUrl=`sfdx force:org:describe -u $hubUsername --json | jq -r .sfdxAuthUrl`

sfdx heroku:config:set SFDX_AUTH_URL=$testUrl --app $stagingName
sfdx heroku:config:set SFDX_DEV_HUB_AUTH_URL=$hubUrl --app $stagingName
sfdx heroku:config:set SFDX_AUTH_URL=$prodUrl --app $prodName

sfdx heroku:ci:config:set SFDX_DEV_HUB_AUTH_URL=$hubUrl --app $stagingName