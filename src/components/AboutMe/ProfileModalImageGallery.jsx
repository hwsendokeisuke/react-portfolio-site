import React, { useState } from 'react';

// ImageGalleryコンポーネント
const ImageGallery = ({ images }) => {
  // 選択された画像の状態を管理するためのuseStateフック
  const [selectedImage, setSelectedImage] = useState(images[0]); // 初期値は最初の画像

  // 画像が選択されたときに呼び出される関数
  const handleImageSelect = (image) => {
    setSelectedImage(image); // 選択された画像を状態に設定
  };

  return (
    <div>
      {/* サムネイル画像の表示部分 */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {images.map((image, index) => (
          <img
            key={index} // 各画像に一意のキーを設定
            src={image} // 画像のソース
            alt={`Thumbnail ${index}`} // サムネイルの代替テキスト
            style={{ cursor: 'pointer', width: '100px', height: '100px', margin: '0 1px' }} // スタイル設定
            onClick={() => handleImageSelect(image)} // クリック時に画像を選択
          />
        ))}
      </div>
      {/* 選択された画像の表示部分 */}
      <div style={{ textAlign: 'center' }}>
        {selectedImage && (
          <img
            src={selectedImage} // 選択された画像のソース
            alt="Selected" // 選択された画像の代替テキスト
            style={{ width: '300px', height: '300px' }} // スタイル設定
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
