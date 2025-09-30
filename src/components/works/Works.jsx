// Works.js
import React from 'react';
import '../../App.css';
import Card from './Card'; // Cardコンポーネントをインポート

export const Works = () => {
  const worksData = [
    {
      to: "/WorkPortforio",
      imgSrc: "/images/profile-image.png",
      altText: "ポートフォリオ",
      title: "ポートフォリオ",
      description: "自身の経歴や製作物をまとめたポートフォリオを作成しました。",
      tags: ["#Webサイト", "#React", "#HTML/CSS", "#JavaScript"],
    },
    {
      to: "/WorkKoreaBlog",
      imgSrc: "/images/profile-image.png",
      altText: "Django×Azure RAG機能付き韓国ドラマブログ",
      title: "Django×Azure RAG機能付き韓国ドラマブログ",
      description: "Djangoを使ったブログとAzure Open AIを活用したChatBotを作成しました。",
      tags: ["#Webサイト", "#Django", "#Python", "#HTML/CSS", "#AzureOpenAI", "#LangChain", "#RAG"],
    },
  ];

  return (
    <div className="main" id="works">
      <div className="overlay-main">
        <div className="container">
          <h1 className="title-text">Works</h1>
          <div className="card-container">
            {worksData.map((work, index) => (
              <div key={index}>
                <Card 
                  to={work.to}
                  imgSrc={work.imgSrc}
                  altText={work.altText}
                  title={work.title}
                  description={work.description}
                  tags={work.tags}
                />
                {index < worksData.length - 1 && <hr />}
              </div>
            ))}
          </div>
          <a href="#skills"><div className="next-icon"></div></a>
        </div>
      </div>
    </div>
  );
};

export default Works;
