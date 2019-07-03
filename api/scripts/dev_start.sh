
./gradlew build shadowJar -x test;
sls sam export -o template.yml;
# sam local start-api
sam local invoke BraynDevHello <<< "{}";
