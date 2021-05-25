export default function BigStar3() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={767.105}
      height={915.678}
      viewBox="0 0 767.105 915.678"
      version="1.1"
      id="svg3261"
    >
      <defs>
        <filter
          id="glow"
          width="100%"
          height="100%"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="4"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2" />
          <feGaussianBlur
            in="shadowOffsetOuter2"
            result="shadowBlurOuter2"
            stdDeviation="7"
          />
          <feColorMatrix
            in="shadowBlurOuter2"
            result="shadowMatrixOuter2"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
          />
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter3" />
          <feGaussianBlur
            in="shadowOffsetOuter3"
            result="shadowBlurOuter3"
            stdDeviation="10"
          />
          <feColorMatrix
            in="shadowBlurOuter3"
            result="shadowMatrixOuter3"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
          />
          <feOffset
            dx="2"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter4"
          />
          <feGaussianBlur
            in="shadowOffsetOuter4"
            result="shadowBlurOuter4"
            stdDeviation="1"
          />
          <feColorMatrix
            in="shadowBlurOuter4"
            result="shadowMatrixOuter4"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69678442 0"
          />
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter5" />
          <feGaussianBlur
            in="shadowOffsetOuter5"
            result="shadowBlurOuter5"
            stdDeviation="8"
          />
          <feColorMatrix
            in="shadowBlurOuter5"
            result="shadowMatrixOuter5"
            values="0 0 0 0 0.314369351 0 0 0 0 0.8883757 0 0 0 0 0.759899616 0 0 0 0.649371603 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
            <feMergeNode in="shadowMatrixOuter3" />
            {/* <feMergeNode in="shadowMatrixOuter4" /> */}
            <feMergeNode in="shadowMatrixOuter5" />
          </feMerge>
        </filter>
        <path
          style={{
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0.0352778,
            boxShadow: '0 0 10px #0000FF',
          }}
          id="star-11"
          // d="m 179.91702,-37.602226 0.75354,2.452864 2.45251,0.753533 -2.45251,0.753534 -0.75354,2.452864 -0.75424,-2.452864 -2.45251,-0.753534 2.45251,-0.753533 0.75424,-2.452864"
          d="M55.37 137.583l.399 1.3 1.298.398-1.298.399-.4 1.298-.398-1.298-1.298-.4 1.298-.398.399-1.299M98.46 148.923l.398 1.299 1.299.398-1.3.399-.398 1.299-.399-1.3-1.298-.398 1.298-.398.4-1.3M152.888 46.113l.398 1.299 1.3.399-1.3.398-.398 1.3-.399-1.3-1.299-.398 1.299-.399.399-1.299M52.346 17.002l.399-1.299 1.299-.398-1.3-.399-.398-1.299-.399 1.3-1.298.398 1.298.398.399 1.3M177.079 200.705l.31 1.01 1.01.31-1.01.31-.31 1.01-.31-1.01-1.01-.31 1.01-.31.31-1.01M91.656 58.584l.133.433.432.133-.432.133-.133.433-.133-.433-.433-.133.433-.133.133-.433M13.037 217.334l.133.433.432.133-.432.133-.133.433-.133-.433-.433-.133.433-.133.133-.433M17.572 95.626l.134.433.432.133-.432.132-.134.433-.132-.433-.433-.132.433-.133.132-.433M122.65 94.114l.133.433.432.133-.432.132-.133.434-.133-.434-.433-.132.433-.133.133-.433M143.817 235.86l.753 2.453 2.453.754-2.453.753-.753 2.453-.754-2.453-2.453-.753 2.453-.754.754-2.453M199.757 218.473l.754 2.453 2.452.754-2.452.753-.754 2.453-.754-2.453-2.452-.753 2.452-.754.754-2.453M1.697 0l.399 1.299 1.299.399-1.299.398-.399 1.3-.398-1.3L0 1.698l1.299-.4L1.697 0M53.102 236.613l.399 1.299 1.299.399-1.3.398-.398 1.3-.399-1.3-1.298-.398 1.298-.399.399-1.299"
        />
      </defs>
      <g fill="#e8e8e7" fillRule="evenodd">
        <use fill="#000" filter="url(#glow)" xlinkHref="#star-11" />
        <use fill="#FFF" xlinkHref="#star-11" />
        {/* <path d="M55.37 137.583l.399 1.3 1.298.398-1.298.399-.4 1.298-.398-1.298-1.298-.4 1.298-.398.399-1.299M98.46 148.923l.398 1.299 1.299.398-1.3.399-.398 1.299-.399-1.3-1.298-.398 1.298-.398.4-1.3M152.888 46.113l.398 1.299 1.3.399-1.3.398-.398 1.3-.399-1.3-1.299-.398 1.299-.399.399-1.299M52.346 17.002l.399-1.299 1.299-.398-1.3-.399-.398-1.299-.399 1.3-1.298.398 1.298.398.399 1.3M177.079 200.705l.31 1.01 1.01.31-1.01.31-.31 1.01-.31-1.01-1.01-.31 1.01-.31.31-1.01M91.656 58.584l.133.433.432.133-.432.133-.133.433-.133-.433-.433-.133.433-.133.133-.433M13.037 217.334l.133.433.432.133-.432.133-.133.433-.133-.433-.433-.133.433-.133.133-.433M17.572 95.626l.134.433.432.133-.432.132-.134.433-.132-.433-.433-.132.433-.133.132-.433M122.65 94.114l.133.433.432.133-.432.132-.133.434-.133-.434-.433-.132.433-.133.133-.433M143.817 235.86l.753 2.453 2.453.754-2.453.753-.753 2.453-.754-2.453-2.453-.753 2.453-.754.754-2.453M199.757 218.473l.754 2.453 2.452.754-2.452.753-.754 2.453-.754-2.453-2.452-.753 2.452-.754.754-2.453M1.697 0l.399 1.299 1.299.399-1.299.398-.399 1.3-.398-1.3L0 1.698l1.299-.4L1.697 0M53.102 236.613l.399 1.299 1.299.399-1.3.398-.398 1.3-.399-1.3-1.298-.398 1.298-.399.399-1.299" /> */}
      </g>
    </svg>
  );
}
