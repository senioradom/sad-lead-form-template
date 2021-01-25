class SadLeadFormTemplate {
  constructor(rgpdDescription) {
    this._rgpdDescription = rgpdDescription;
  }

  getApplicationTemplate() {
    return `
<form action="#" class="sad-lead-form" id="js-sad-lead-form">
    <!-- ------------------
     Left column
    ------------------- -->
    <div class="sad-lead-form__column sad-lead-form__column--half">
        <!-- ------------------
         Je suis : applicant.lastname
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-i-am">
            <label class="sad-lead-form-label"><span class="sad-lead-form-text-inline">Je suis<sup>*</sup></span></label>
            <select name="applicant.gender" class="sad-lead-form-select">
                <option selected value="">-</option>
                <option value="M">M.</option>
                <option value="F">Mme</option>
            </select>

            <div class="sad-lead-form-error">
                Ce champ est obligatoire.
            </div>
        </div>

        <!-- ------------------
         Nom : applicant.lastname
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-lastname">
            <label class="sad-lead-form-label" for="applicant-lastname"><span class="sad-lead-form-text-inline">Nom<sup>*</sup></span></label>
            <input class="sad-lead-form-input" id="applicant-lastname" name="applicant.lastname" type="text" autocorrect="off" autocomplete="family-name" placeholder="Nom">

            <div class="sad-lead-form-error" id="js-sad-lead-form-field-lastname-error-message">
                Ce champ est obligatoire.
            </div>
        </div>

        <!-- ------------------
         Prénom : applicant.lastname
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-first-name">
            <label class="sad-lead-form-label" for="applicant-firstname"><span class="sad-lead-form-text-inline">Prénom<sup>*</sup></span></label>
            <input class="sad-lead-form-input" id="applicant-firstname" name="applicant.firstname" type="text" autocorrect="off" autocomplete="family-name" placeholder="Prénom">

            <div class="sad-lead-form-error" id="js-sad-lead-form-field-firstname-error-message">
                Ce champ est obligatoire.
            </div>
        </div>

        <!-- ------------------
         Je souhaite des informations : applicant.relation
        ------------------- -->
        <div class="sad-lead-form-control">
            <label for="applicant-relation" class="sad-lead-form-label">Je souhaite des informations</label>
            <select id="applicant-relation" name="applicant.relation" class="sad-lead-form-select">
                <option value="himself" selected>Pour moi</option>
                <option value="other">Pour un proche</option>
            </select>
        </div>
    </div>

    <!-- ------------------
     Right column
    ------------------- -->
    <div class="sad-lead-form__column sad-lead-form__column--half">

        <div class="sad-lead-form-control" id="js-sad-lead-form-field-media">
            <label class="sad-lead-form-label">
                Je souhaite&nbsp;:
            </label>

            <div class="sad-lead-form-error">
                Veuillez sélectionner au moins un canal de contact et renseigner les informations
            </div>
        </div>

        <!-- ------------------
         E-mail : applicant.email
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-email">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-email-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.email">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-email-toggle">Recevoir de la documentation par E-mail</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.email">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.email" name="applicant.email" type="email" autocapitalize="off" autocorrect="off" autocomplete="email" placeholder="Saisissez votre adresse e-mail">

            <div class="sad-lead-form-error" id="js-sad-lead-form-field-email-error-message"></div>
        </div>

        <!-- ------------------
         Address : applicant.address.xxx
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-address">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-address-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.address">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-address-toggle">Recevoir de la documentation par courrier</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address">
            <input class="sad-lead-form-input sad--hidden sad-uppercase" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l2" placeholder="Appt / Esc / Etage" type="text" autocorrect="off">
            <input class="sad-lead-form-input sad--hidden sad-uppercase" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l3" placeholder="Bâtiment/Résidence" type="text" autocorrect="off">
            <input class="sad-lead-form-input sad--hidden sad-uppercase" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l4" placeholder="Adresse" type="text" autocorrect="off" autocomplete="address-line1">

            <div class="sad-lead-form-flex__container">
                <div class="sad-lead-form-flex__element sad-lead-form-width-382pc">
                    <input class="sad-lead-form-input sad--hidden sad-uppercase" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.zipcode" placeholder="Code Postal" type="text" pattern="\\d*" novalidate autocorrect="off" autocomplete="postal-code">
                </div>

                <div class="sad-lead-form-flex__element sad-lead-form-width-flex-grow-1">
                    <input class="sad-lead-form-input sad--hidden sad-uppercase" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.city" placeholder="Ville" type="text" autocorrect="off" autocomplete="address-level2">
                </div>
            </div>

             <div class="sad-lead-form-error" id="js-sad-lead-form-field-zipcode-error-message"></div>
        </div>

        <!-- ------------------
         Phone : applicant.phoneNumber
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-phone">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-phone-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.phoneNumber">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-phone-toggle">Être rappelé</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phoneNumber">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phoneNumber" name="applicant.phoneNumber" placeholder="Saisissez votre numéro de téléphone " type="number" autocorrect="off" autocomplete="tel">

            <div class="sad-lead-form-error" id="js-sad-lead-form-field-phone-error-message"></div>
        </div>

        <!-- ------------------
         Je suis disponible : additionalInformation
        ------------------- -->
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phoneNumber">
            <label class="sad-lead-form-label">Je suis disponible</label>
            <select class="sad-lead-form-select" data-sad-lead-form-conditional-display-target="applicant.phoneNumber" data-sad-lead-form-field-name-additional-information-as-array>
                <option selected value="">-</option>
                <option value="Le matin">Le matin</option>
                <option value="L’après-midi">L’après-midi</option>
                <option value="Toute la journée">Toute la journée</option>
            </select>
        </div>
    </div>

    <div class="sad-lead-form__column sad-lead-form__column--full">
        <!-- ------------------
         Informations complémentaires : additionalInformation
        ------------------- -->
        <div class="sad-lead-form-control">
            <label class="sad-lead-form-label" for="additionalInformation-line2">Informations complémentaires :</label>
            <textarea class="sad-lead-form-input" id="additionalInformation-line2" rows="8" cols="40" data-sad-lead-form-field-name-additional-information-as-array></textarea>
        </div>

        <div class="sad-lead-form-control">
            <em><small><sup>*</sup> Mentions obligatoires</small></em>
        </div>

        <!-- ------------------
         RGPD
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-rgpd-container">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-field-rgpd" type="checkbox">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-field-rgpd">
                <small>${this._rgpdDescription}</small>
            </label>

            <div class="sad-lead-form-error sad-pt-8">
                Autorisation obligatoire.
            </div>
        </div>
    </div>

    <div class="sad-lead-form__column sad-lead-form__column--half">
        <div class="sad-lead-form__submit-container">
            <!-- ------------------
             Envoyer
            ------------------- -->
            <div class="sad-lead-form-text-center" id="js-sad-lead-form-field-submit">
                <button type="submit" class="sad-lead-form-button sad-lead-form__submit-button sad-lead-form-button--dark" id="js-sad-lead-form-button-submit">Envoyer</button>

                <div class="sad-lead-form-error sad-pt-8">
                    Merci de compléter les informations manquantes.
                </div>
            </div>
        </div>
    </div>
</form>`;
  }
}

export default SadLeadFormTemplate;
