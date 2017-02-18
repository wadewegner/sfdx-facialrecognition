source heroku-config

sfdx heroku:pipelines:setup $pipelineName $repo -y

sfdx heroku:pipelines:add $pipelineName --app $stagingName --stage staging
sfdx heroku:pipelines:add $pipelineName --app $prodName --stage production

sfdx heroku:buildpacks:add https://github.com/heroku/salesforce-buildpack --app $stagingName
sfdx heroku:buildpacks:add https://github.com/heroku/salesforce-buildpack --app $prodName

sfdx heroku:addons:create salesforce:standard --app $stagingName
sfdx heroku:addons:create salesforce:standard --app $prodName

# sfdx heroku:config:set HEROKU_APP_NAME=$stagingName --app $stagingName
# sfdx heroku:config:set HEROKU_APP_NAME=$prodName --app $prodName