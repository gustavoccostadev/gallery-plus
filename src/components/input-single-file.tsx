export default function InputSingleFile() {
  return (
    <div>
      <div>
        <input
          type="file"
          className={`
                absolute top-0 right-0 w-full h-full
                opacity-0 cursor-pointer
                `}
        />
      </div>
    </div>
  );
}
