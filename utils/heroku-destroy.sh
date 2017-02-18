source heroku-config

sfdx heroku:pipelines:destroy $pipelineName
sfdx heroku:apps:destroy --app $stagingName --confirm $stagingName
sfdx heroku:apps:destroy --app $prodName --confirm $prodName