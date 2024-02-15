
# 参考
# https://qiita.com/Littlebit175/items/77a90a560d190f178e56


# ホームへ
sudo apt install curl
cd ~


# ぶっちゃけappium関係ないがandroid_studioダウンロード
curl -OL https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.28/android-studio-2023.1.1.28-linux.tar.gz
sudo tar -zxvf ~/android-studio-*-linux.tar.gz
sudo mv android-studio/ /usr/local/




# java追加
sudo apt install openjdk-11-jdk
# パス追記＆反映
echo 'export ANDROID_HOME="$HOME/Android/Sdk"' >> ~/.bashrc
echo 'export JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"' >> ~/.bashrc
echo 'export ADB="$ANDROID_HOME/platform-tools/adb"' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bashrc
source ~/.bashrc




# npm関係追加
sudo apt install npm
sudo npm install n -g
sudo n stable




# appiumインストール
sudo npm i -g appium appium-doctor
appium driver install uiautomator2




# appium-inspector関係
curl -OL https://github.com/appium/appium-inspector/releases/download/v2023.12.2/Appium-Inspector-linux-2023.12.2.AppImage
chmod 755 Appium-Inspector-*.AppImage
# なんか追加で必要とか言われる謎のやつ
sudo apt install libfuse2




# python、robotframework関係
sudo apt install python3-pip
# pipが非推奨？で--break-system-packagesの引数が必要らしい
pip3 install --break-system-packages robotframework
pip3 install --break-system-packages robotframework-appiumlibrary




# シェルに出来るのはここまで


# appium起動
appium

# appium-inspector起動
./Appium-Inspector-linux-2023.12.2.AppImage

# android-studio起動
/usr/local/android-studio/bin/studio.sh




# ts.robotの例
*** Settings ***
Library    AppiumLibrary
*** Variables ***

*** Keywords ***
Launch_App
    Open Application    http://localhost:4723
    ...    platformName=android
    ...    automationName=UiAutomator2
    ...    deviceName=SCV7N18806000623
    ...    appPackage=com.android.settings
    ...    appActivity=.HWSettings

*** Test Cases ***
__init
    Launch_App




# ts.robotの実行
python3 -m robot ts.robot
# ts.robotの実行(ログ未出力)
python3 -m robot --output NONE --log MONE --report NONE ts.robot


 






































































