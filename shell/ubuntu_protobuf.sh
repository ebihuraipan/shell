

# LANG=C xdg-user-dirs-update --force


# プロトコルバッファインストール
sudo apt install protobuf-compiler


# goインストール
sudo apt  install golang-go


# プロジェクト作成
go mod init pb
go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest


# パス未設定なので
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin


# プロトコルバッファ作成実行
protoc --doc_out=./doc --doc_opt=html,index.html ./**/*.proto






















