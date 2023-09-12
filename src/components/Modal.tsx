interface ModalProps {
  children: React.ReactNode;
  titleText: string;
  onClose: () => void;
}

function Modal({ children, titleText, onClose }: ModalProps) {
  return (
    <>
      <section
        className="fixed bg-black/50 top-0 left-0 bottom-0 right-0"
        onClick={onClose}
        tabIndex={0}
        onKeyUp={(e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }}
      >
        <article
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] p-5 rounded bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl text-center mb-3 font-medium">{titleText}</h1>
          {children}
        </article>
      </section>
    </>
  );
}

export { Modal };
