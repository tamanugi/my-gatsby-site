import * as React from "react";
import type { HeadFC } from "gatsby";

const DummyPlace = ({ text }: { text: string }) => (
  <div className="bg-gray-300 flex justify-center items-center h-64 font-bold text-2xl">
    {text}
  </div>
);

const IndexPage = () => {
  return (
    <>
      <header className="container mx-auto flex flex-row justify-between py-6">
        <a className="block" href="/">
          ロゴ
        </a>
        <div>上場企業の開示情報があっという間に検索</div>
      </header>
      <main className="">
        <section className="hero h-[720px] bg-blue-400 py-[100px]">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-3xl">ファーストビュー画像</div>
          </div>
        </section>

        <section className="pt-4 container mx-auto">
          <p className="text-[24px] font-semibold">
            膨大な上場企業の開示情報調査が探しもれなくあっという間に終了します。
            <br />
            企業開示を調査するルーティンワークで疲弊する日々から解法されましょう。
            <br />
            煩わしい単純作業から開放され、限りある時間を有効利用し、より生産性の高い仕事に取り組みましょう。
          </p>
        </section>

        <section className="container mx-auto flex justify-center pt-20">
          <button className="bg-[#ADECDE] text-white py-6 px-20 rounded-full text-2xl shadow-md">
            お問い合わせはこちら
          </button>
        </section>

        <section className="container mx-auto pt-20 px-24">
          <DummyPlace text="画面など"></DummyPlace>
        </section>

        <section className="bg-blue-400 mt-20 h-[360px] flex justify-center items-center text-white">
          アイキャッチ
        </section>

        <section className="container mx-auto flex justify-center pt-20">
          <button className="bg-[#ADECDE] text-white py-6 px-20 rounded-full text-2xl shadow-md">
            お問い合わせはこちら
          </button>
        </section>

        <section className="container mx-auto pt-20 px-24">
          <DummyPlace text="導入事例"></DummyPlace>
        </section>

        <section className="container mx-auto pt-20 px-24">
          <DummyPlace text="FAQ"></DummyPlace>
        </section>

        <section className="container mx-auto pt-20 px-24">
          <DummyPlace text="会社概要"></DummyPlace>
        </section>

        <section className="container mx-auto flex justify-center pt-20">
          <button className="bg-[#ADECDE] text-white py-6 px-20 rounded-full text-2xl shadow-md">
            お問い合わせはこちら
          </button>
        </section>
      </main>
      <footer className="mt-36 h-40 bg-black"></footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
