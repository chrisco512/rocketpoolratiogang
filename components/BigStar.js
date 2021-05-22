export default function BigStar() {
  return (
    <svg
      width="232.54613mm"
      height="248.19379mm"
      viewBox="0 0 232.54613 248.19379"
      version="1.1"
      id="svg10542"
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
          id="star-1"
          d="m 43.089286,51.779185 1.333147,4.340226 4.340225,1.333147 -4.340225,1.333147 -1.333147,4.339873 -1.3335,-4.339873 -4.339873,-1.333147 4.339873,-1.333147 1.3335,-4.340226"
          style={{
            // fill: '#ffffff',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0.0352778,
            boxShadow: '0 0 10px #0000FF',
          }}
        />
        <path
          id="star-2"
          d="m 197.30357,106.20776 1.33315,4.34022 4.34023,1.33315 -4.34023,1.33315 -1.33315,4.33987 -1.3335,-4.33987 -4.33987,-1.33315 4.33987,-1.33315 1.3335,-4.34022"
          style={{
            // fill: '#e8e8e7',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0.0352778,
          }}
        />
        <path
          id="star-3"
          d="m 29.482317,172.80044 1.671814,5.44371 5.444067,1.67217 -5.444067,1.67252 -1.671814,5.44406 -1.672167,-5.44406 -5.444067,-1.67252 5.444067,-1.67217 1.672167,-5.44371"
          style={{
            // fill: '#e8e8e7',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0.0352778,
          }}
        />
      </defs>
      <g id="layer1">
        <g id="g-star-1">
          <use fill="#000" filter="url(#glow)" xlinkHref="#star-1" />
          <use fill="#FFF" xlinkHref="#star-1" />
        </g>
        <g id="g-star-2">
          <use fill="#000" filter="url(#glow)" xlinkHref="#star-2" />
          <use fill="#FFF" xlinkHref="#star-2" />
        </g>
        <g id="g-star-3">
          <use fill="#000" filter="url(#glow)" xlinkHref="#star-3" />
          <use fill="#FFF" xlinkHref="#star-3" />
        </g>
      </g>
    </svg>
  );
}
