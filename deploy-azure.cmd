pushd

call npm run build

copy ".\src\web.config" ".\build\web.config"
robocopy ".\src\api" ".\build\api" /S
robocopy ".\build" "..\dotnetzuid-preact-demo" /S

cd "..\dotnetzuid-preact-demo"
git add .
git commit -m "Demo"
git push

popd