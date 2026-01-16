import { type VariantProps, tv } from "tailwind-variants";


export const inputSingleFileVariants = tv({
  base: `
    flex flex-col items-center justify-center w-full
  `
})

export default function InputSingleFile() {
  return (
    <div>
      <div className="w-full relative group cursor-pointer">
        <input
          type="file"
          className={`
                absolute top-0 right-0 w-full h-full
                opacity-0 cursor-pointer
                `}
        />
        <div className={inputSingleFileVariants()}>

        </div>
      </div>
    </div>
  );
}
