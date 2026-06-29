import React from 'react';
import '../styles/lumi.css';

type Props = {
  url?: string;
  runId?: string;
  title?: string;
  className?: string;
};

/**
 * Simple responsive Lumi embed component.
 * Usage: <LumiPlayer runId="ztxexD" /> or <LumiPlayer url="https://app.lumi.education/run/ztxexD" />
 */
const LumiPlayer: React.FC<Props> = ({ url, runId, title = 'Lumi Player', className }) => {
  const src = url ?? (runId ? `https://app.lumi.education/run/${runId}` : '');

  if (!src) return null;

  return (
    <div className={["lumi-wrapper", className].filter(Boolean).join(' ')}>
      <iframe
        src={src}
        title={title}
        style={{ border: 0 }}
        allowFullScreen
        // sandbox can be adjusted if needed
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default LumiPlayer;
