import { useState } from 'react';

/**
 * useModal フック
 * モーダルの開閉状態とコンテンツを管理するカスタムフックです。
 * 
 * @returns {Object} モーダルの状態と操作関数を含むオブジェクト
 */
const useModal = () => {
  // モーダルが開いているかどうかの状態を管理するためのステート
  const [open, setOpen] = useState(false);
  
  // モーダルに表示するコンテンツを管理するためのステート
  const [content, setContent] = useState(null);

  /**
   * モーダルを開くための関数
   * @param {ReactNode} content - モーダルに表示する内容
   */
  const handleOpen = (content) => {
    setContent(content); // コンテンツを設定
    setOpen(true);      // モーダルを開く
  };

  /**
   * モーダルを閉じるための関数
   */
  const handleClose = () => {
    setOpen(false);     // モーダルを閉じる
    setContent(null);   // コンテンツをリセット
  };

  // モーダルの状態と操作関数をオブジェクトとして返す
  return {
    open,          // モーダルが開いているかどうかの状態
    content,       // モーダルに表示するコンテンツ
    handleOpen,    // モーダルを開くための関数
    handleClose,   // モーダルを閉じるための関数
  };
};

export default useModal;
