echo "Initiating Build Process"
read -p "Enter File Name: " file_name
echo "Removing Previous build"
rm app-release.apk
echo "Checking and cleaning all builds"
ls | grep app_release
rm app_release*
cd android
echo "Cleaning Android Build"
./gradlew clean
echo "Assembling Android Build"
./gradlew assembleRelease
echo "Fetching APK"
mv ./app/build/outputs/apk/release/app-release.apk ../app_release_$file_name.apk
echo "Process Completed"
