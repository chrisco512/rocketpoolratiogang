export default function Megatron({ isLoading, result, rplUsdPrice, ethRatio }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        borderRadius: 5,
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: 16, display: 'flex' }}>
        <div
          style={{
            width: 68,
            marginRight: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/rocketpoolicon.svg" width="100%" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: 36,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            ROCKET<span style={{ color: '#F9DE1A' }}>POOL</span>
          </h1>
          <h2
            style={{
              marginBottom: 0,
              marginTop: -4,
              fontSize: 32,
            }}
          >
            RATIOGANG
          </h2>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          borderTopWidth: 1,
          borderLeftWidth: 0,
          borderBottomWidth: 0,
          borderRightWidth: 0,
          borderStyle: 'solid',
          borderColor: 'white',
        }}
      >
        <div
          style={{
            color: 'white',
            fontWeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderWidth: 0,
            borderRightWidth: 1,
            borderColor: 'white',
            borderStyle: 'solid',
            width: '50%',
          }}
        >
          {!isLoading && result ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 22, marginRight: 4 }}>Ξ</span>
              <span style={{ fontSize: 20 }}>{ethRatio}</span>
            </div>
          ) : null}
        </div>
        <div
          style={{
            borderColor: 'white',
            borderWidth: 0,
            borderStyle: 'solid',
            color: 'white',
            fontWeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            padding: 16,
          }}
        >
          {!isLoading && result ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 22, marginRight: 4 }}>$</span>
              <span style={{ fontSize: 20 }}>
                {Number(rplUsdPrice).toFixed(2)}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
