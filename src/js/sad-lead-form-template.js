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

            <div class="sad-lead-form-error">
                Ce champ est obligatoire.
            </div>
        </div>

        <!-- ------------------
         Prénom : applicant.lastname
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-first-name">
            <label class="sad-lead-form-label" for="applicant-firstname"><span class="sad-lead-form-text-inline">Prénom<sup>*</sup></span></label>
            <input class="sad-lead-form-input" id="applicant-firstname" name="applicant.firstname" type="text" autocorrect="off" autocomplete="family-name" placeholder="Prénom">

            <div class="sad-lead-form-error">
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

        <!-- ------------------
         Pour une solution
        ------------------- -->
        <div class="sad-lead-form-control">
            <label class="sad-lead-form-label">Pour une solution</label>
        </div>

        <div class="sad-lead-form-flex__container">
            <div class="sad-lead-form-control sad-lead-form-flex__element">
                <input class="sad-lead-form-control__input" id="need-housing_security" type="checkbox" value="housing_security" data-sad-lead-form-field-name-need-as-array="housing_security">
                <label class="sad-lead-form-control__label" for="need-housing_security">Intérieure</label>
            </div>

            <div class="sad-lead-form-control sad-lead-form-flex__element">
                <input class="sad-lead-form-control__input" id="need-outdoor_travel" type="checkbox" value="outdoor_travel" data-sad-lead-form-field-name-need-as-array="outdoor_travel">
                <label class="sad-lead-form-control__label" for="need-outdoor_travel">Extérieure</label>
            </div>
        </div>
    </div>

    <!-- ------------------
     Right column
    ------------------- -->
    <div class="sad-lead-form__column sad-lead-form__column--half">

        <div class="sad-lead-form-control" id="js-sad-lead-form-field-media">
            <label class="sad-lead-form-label">
                Je souhaite recevoir de la documentation par&nbsp;:
            </label>

            <div class="sad-lead-form-error">
                Veuillez sélectionner au moins un canal de contact
            </div>
        </div>

        <!-- ------------------
         E-mail : applicant.email
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-email">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-email-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.email">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-email-toggle">E-mail</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.email">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.email" name="applicant.email" type="email" autocapitalize="off" autocorrect="off" autocomplete="email" placeholder="Saisissez votre adresse e-mail">
        </div>

        <!-- ------------------
         Address : applicant.address.xxx
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-address">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-address-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.address">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-address-toggle">Par courrier</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l2" placeholder="Appt / Esc / Etage" type="text" autocorrect="off">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l3" placeholder="Bâtiment/Résidence" type="text" autocorrect="off">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.l4" placeholder="Adresse" type="text" autocorrect="off" autocomplete="address-line1">

            <div class="sad-lead-form-flex__container">
                <div class="sad-lead-form-flex__element sad-lead-form-width-382pc">
                    <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.zipcode" placeholder="Code Postal" type="text" pattern="\\d*" novalidate autocorrect="off" autocomplete="postal-code">
                </div>

                <div class="sad-lead-form-flex__element sad-lead-form-width-flex-grow-1">
                    <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.address" name="applicant.address.city" placeholder="Ville" type="text" autocorrect="off" autocomplete="address-level2">
                </div>
            </div>
        </div>

        <!-- ------------------
         Phone : applicant.phonenumber
        ------------------- -->
        <div class="sad-lead-form-control" id="js-sad-lead-form-field-phone">
            <input class="sad-lead-form-control__input" id="js-sad-lead-form-phone-toggle" type="checkbox" data-sad-lead-form-conditional-display-toggle="applicant.phonenumber">
            <label class="sad-lead-form-control__label" for="js-sad-lead-form-phone-toggle">Être recontacter par téléphone</label>
        </div>
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phonenumber">
            <input class="sad-lead-form-input sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phonenumber" name="applicant.phonenumber" placeholder="Saisissez votre numéro de téléphone " type="tel" autocorrect="off" autocomplete="tel">
        </div>

        <!-- ------------------
         Je suis disponible : additionalinformation
        ------------------- -->
        <div class="sad-lead-form-control sad--hidden" data-sad-lead-form-conditional-display-target="applicant.phonenumber">
            <label class="sad-lead-form-label">Je suis disponible</label>
            <select class="sad-lead-form-select" data-sad-lead-form-conditional-display-target="applicant.phonenumber" data-sad-lead-form-field-name-additionalinformation-as-array>
                <option selected value="">-</option>
                <option value="Le matin">Le matin</option>
                <option value="L’après-midi">L’après-midi</option>
                <option value="Toute la journée">Toute la journée</option>
            </select>
        </div>
    </div>

    <div class="sad-lead-form__column sad-lead-form__column--full">
        <!-- ------------------
         Informations complémentaires : additionalinformation
        ------------------- -->
        <div class="sad-lead-form-control">
            <label class="sad-lead-form-label" for="additionalinformation-line2">Informations complémentaires :</label>
            <textarea class="sad-lead-form-input" id="additionalinformation-line2" rows="8" cols="40" data-sad-lead-form-field-name-additionalinformation-as-array></textarea>
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

    <div class="sad-lead-form__column sad-lead-form__column--half"></div>
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
