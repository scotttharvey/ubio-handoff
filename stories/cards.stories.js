export default {
  title: 'Cards',
};

// import '../dist/styles.434540e1.css'

export const Card = () => `
<div class="container bg-gray-light">
  <div id="screen-5" class="row p-y-30 sm:p-y-15">
    <section class="flex w-100 flex-wrap sm:flex-column">

      <div class="w-66 sm:w-100 p-y-25 sm:p-t-0 content">
        <h1 class="h3 gray-darkest thin p-b-15">Checkout</h1>
        <p class="p-b-25 sm:hidden">Just a few more steps and you’ll be set! Fill out your information below to place your order. </p>

        <section class="bg-white p-25 sm:p-x-15">
          <div class="w-100 m-b-15 flex space-between">
            <p class="text-18 thin">Promotions & Fees</p>
            <p class="gray">Step 1 of 6</p>
          </div>
          <p class="text-14 thin p-b-15">The following Promotions are available for your order.</p>

          <div class="promo-container flex flex-column w-100 p-b-25">
            <section class="w-100 flex md-down:flex-column space-between border-blue-light-2 border-radius-4 box-shadow p-y-25 p-x-20">

              <div class="md-down:w-100 flex space-between p-l-10 md-down:p-0">
                <div>
                  <div class="flex space-between">
                    <p class="text-18 blue-dark p-t-5 p-b-15">$100 Reawrd card for AT&T Internet</p>
                    <p class="text-18 thin text-right lg-up:hidden">FREE</p>
                  </div>
                  <p class="text-14 thin p-b-15 w-75 sm:w-100">Complete your order online today and get an extra $100 reward card. Ends 6/30/20. Redemption required.
                  <span class="btn text-14 underlined" data-modal-trigger="internetPromo">See offer details</span></p>
                  <!-- Start modal content -->
                  <div data-modal-content="internetPromo" class="modal hidden sm:p-x-15 is-active">
                    <div class="modal-content p-25 p-r-15 sm:p-x-15 w-60 md-down:w-100">
                      <div class="w-100 text-right">
                        <span data-modal-trigger="close" class="close -m-t-10">&#10005;</span>
                      </div>
                      <div class="p-y-30 scrollable-content">
                        <div class="text-left">
                          <p class="text-24 p-b-15 thin">Offer Details.</p>
                          <p class="text-14 p-b-15"><span class="bold">Redemption req’d.  Internet plans 25M+.</span> Reward Card issued by The Bancorp Bank pursuant to license from Visa U.S.A. Inc.</p>
                          <p class="bold text-14 p-b-15">
                            Geographic and service restrictions apply to AT&T Internet services. Not all speeds available in all areas.
                          </p>

                          <p class="text-14 p-b-15"><span class="bold">$100 REWARD CARD for AT&T Internet: Subj. to change and may be discontinued at any time.</span>
                            For new residential AT&T Internet customers purchasing high speed internet plans 25M and higher (min. $49.99/mo + taxes & $10/mo equip. fee) through All Home Connections.  Residents of select multi-dwelling units are not eligible for this offer. Reward Card: Will be sent email or letter with redemption requirements. Redemption req’d. w/in 75 days from reward notification email or mail date. Reward Card delivered within 3-4 weeks after redemption to customers who maintain qualifying service from installation date and through reward fulfillment. Card expires at month-end 6 mos after issuance. For cardholder agreement, go to rewardcenter.att.com. The AT&T Visa Reward Card is issued by The Bancorp Bank pursuant to a license from Visa U.S.A. Inc. and can be used everywhere Visa debit cards are accepted in the United States, US Virgin Islands, and Puerto Rico.  No cash access. The Bancorp Bank; Member FDIC.</p>

                          <p class="text-14 p-b-15"><span class="bold">AT&T Internet:</span>
                            Residential customers. Credit restrictions apply. Activ/Installation: $35 activation fee (self-install) or $99 installation (full tech install) may apply.
                          <a href="https://www.att.com/internet-terms" target="_blank" class="bold black no-underline">Subj. to Internet Terms of Service at att.com/internet-terms.</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End modal content -->
                </div>
                <div class="p-l-15 md-down:hidden">
                  <p class="text-18 thin">FREE</p>
                </div>
              </div>
            </section>
          </div>

          <div class="btn flex flex-end w-100 bg-white sm:fixed-submit">
            <button type="submit" class="btn bg-blue-dark white btn-shadow p-y-8 p-x-65" >Next</button>
          </div>


        </section>
      </div>

      <!-- COST SECTION -->
      <div class="w-33 sm:w-100 p-y-25 sm:p-x-15 content">
        <p class="h3 thin p-b-25 sm:p-b-10">Cost</p>

        <section>
          <div class="bg-white p-25 sm:p-x-15 m-b-25">
            <p class="text-18 bold p-b-10">Monthly Cost</p>
            <div class="flex space-between p-b-5">
              <p class="text-14">Internet 1000</p>
              <p class="text-14">$69.99</p>
            </div>

            <div class="w-100 flex flex-wrap space-between border-top-gray p-t-10 blue-dark bold p-b-25">
              <p class="text-16 w-50">Total</p>
              <p class="text-16 w-50 text-right">69.99</p>
              <span class="w-100 text-12 gray-darkest thin text-right ">plus tax</span>
            </div>

            <p class="text-18 bold p-b-10">First Bill Charges</p>

            <div class="flex space-between p-b-5 blue-light">
              <p class="text-14 w-75">Professional Install - Installation charges are waived for customers ordering AT&T Fiber</p>
              <p class="text-14">$0.00</p>
            </div>

            <div class="w-100 flex flex-wrap space-between border-top-gray p-t-10 blue-dark bold p-b-15">
              <p class="text-16 w-50">Total</p>
              <p class="text-16 w-50 text-right">$0.00</p>
            </div>

          </div>
        </section>

      </div>

    </section>
  </div>
</div>
`;

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Cade Buddy Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
