import React from 'react'
import { WaitingAnimationStyle } from './WaitingAnimation.elements'




export default function WaitingAnimation(diff) {
    console.log(diff);
    return (
        <WaitingAnimationStyle diff={diff}>
            <p>Moving</p>
    <div>
      <span class="m_scroll_arrows unu"></span>
      <span class="m_scroll_arrows doi"></span>
      <span class="m_scroll_arrows trei"></span>
    </div>

        </WaitingAnimationStyle>
    )
}
