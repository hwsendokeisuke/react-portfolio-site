import React from 'react';
import '../App.css'; // CSSファイルをインポート
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from './ContactMe.jp.js';
import { TextField, Typography } from '@mui/material'; // MUIコンポーネントをインポート
// import emailjs from 'emailjs-com'; // EmailJSをインポート

const schema = yup.object({
  // それぞれの検証ルールを作成する
  name: yup
    .string()
    .label('名前')
    .trim().lowercase()
    .transform((value, orgValue) => value.normalize('NFKC')) // 英数字を半角に、カナは全角
    .required()
    .max(30),
  email: yup
    .string()
    .label('メールアドレス')
    .required()
    .email(),
  comment: yup
    .string()
    .label('コメント')
    .required()
    .test('ng',
      ({ label }) => `${label}にNGワードが含まれています`,
      value => {
        const ngs = ['暴力', '死', 'グロ'];
        for (const ng of ngs) {
          if (value.includes(ng)) {
            return false;
          }
        }
        return true;
      })
});

export const ContactMe = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      comment: ''
    },
    // Yupに検証を委ねる
    resolver: yupResolver(schema),
  });

  // 送信成功時の処理
  const onsubmit = data => {
      // ここに送信処理を追加することができます
      console.log(data); // データをコンソールに出力
      alert('送信完了しました！'); // アラートを表示
      reset(); // フォームをリセット
    // EmailJSを使ってメールを送信
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
    //   .then((response) => {
    //     console.log('メールが送信されました！', response.status, response.text);
    //     alert('送信完了しました！'); // アラートを表示
    //     reset(); // フォームをリセット
    //   }, (err) => {
    //     console.error('メールの送信に失敗しました。', err);
    //     alert('メールの送信に失敗しました。再度お試しください。'); // エラーアラートを表示
    //   });
  };

  // エラー時の処理
  const onerror = err => {
    console.error(err);
    alert('エラーが発生しました。再度お試しください。'); // エラーアラートを表示
  };

  return (
    <div className="main" id="contact">
      <div className="overlay-main">
        <div className="center">
          <Typography variant="h2" className="title-text">Contact Me</Typography>
          <div className="text">
            <p>最後までご覧いただきありがとうございました。</p>
            <p>このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。</p>
            <p>何かコメントがありましたら、下記フォームをご利用ください。</p>
          </div>
          <div className="styled-body">
            <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate className="styled-form">
              <div className="form-group">
                <TextField
                  label="名前"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  {...register('name')} // nameフィールドを登録
                  error={!!errors.name} // エラーがあればtrueを設定
                  helperText={errors.name?.message} // エラーメッセージを表示
                  InputProps={{
                    style: { backgroundColor: 'white' }, // 背景色を白に設定
                  }}
                />
              </div>
              <div className="form-group">
                <TextField
                  label="メールアドレス"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  {...register('email')} // emailフィールドを登録
                  error={!!errors.email} // エラーがあればtrueを設定
                  helperText={errors.email?.message} // エラーメッセージを表示
                  InputProps={{
                    style: { backgroundColor: 'white' } // 背景色を白に設定
                  }}
                />
              </div>
              <div className="form-group">
                <TextField
                  label="コメント"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4} // テキストエリアの行数
                  {...register('comment')} // commentフィールドを登録
                  error={!!errors.comment} // エラーがあればtrueを設定
                  helperText={errors.comment?.message} // エラーメッセージを表示
                  InputProps={{
                    style: { backgroundColor: 'white' } // 背景色を白に設定
                  }}
                />
              </div>
              <div className="submit-container">
                <button type="submit" className="submit-button">送信</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
