interface PageTitleProps {
  titleText: string;
}
function PageTitle({ titleText }: PageTitleProps) {
  return (
    <section className="flex justify-center mb-7 text-xl">
      <h1 className="font-bold text-black/50 ">{titleText}</h1>
    </section>
  );
}

export { PageTitle };
