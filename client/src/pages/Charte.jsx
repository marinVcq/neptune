import React from 'react'

const Charte = () => {
  return (
    <div className='charte-page'>
        <h1>Politique de protection des données personnelles du Site Neptune Magazine</h1>
        <p>
            Le Site internet www.neptune-magazine.fr est édité et maintenu par l'association à but non lucrative
            Open'Digital de Brest Open Campus (situé au 475 rue Joséphine Pencalet, 29200 Brest). Nous accordons
            une grande importance au respect de la vie privé. Voici notre politique de protection des données et
            des informations précises à ce sujet.
        </p>

        <div className='text-block'>
            <h2>Quelles sont les données traitées ?</h2>
            <p>A l'heure actuelle nous collectons des informations uniquement lorsque vous nous soumettez un message via le formulaire de contact,
                cela constitue donc des données à caracteres personnelles (en l'occurence nom et adresse email). Nous jugeons
                que l'usage de ces données est pertinent et légitime, ces données sont donc conservées pour une durée conforme
                à la lois suite à quoi elles sont effacées.
            </p>            
        </div>


        <div className='text-block'>
            <h2>Qui sont les destinataires de ces données ?</h2>
            <p>
                Vos données ne sont transmises à aucun collaborateur. L'accés a vos données est strictement réglementé.
                Cependant, Conformément à la lois, nous pouvons transmettre vos données personnelles aux autorités administratives ou judiciaires
                pour nous permettre d'assurer la défense de nos droits et interêts
            </p>            
        </div>


        <div className='text-block'>
            <h2>Cette Charte est-elle amené à evolué ?</h2>
            <p>Oui l'ajout de nouvelles fonctionalités (comme par exemple une newsletter, mesure d'audience, etc...) pourrait amener à une modification de la charte. Une note en fera part au utilisateurs le cas échéant.</p>
        </div>

        <div className='text-block'>
            <h2>Vos droits:</h2>
            <p>Vous disposez des droits suivants:</p>
            <ul>
                <li>Consulter vos données</li>
                <li>Effacer vos données</li>
                <li>Nous contacter via l'adresse email: neptune-magazine@gmail.com</li>
                <li>Nous contacter par courrier: BOC Open'Digital - 475 rue Joséphine Pencalet, 29200 Brest </li>
            </ul>
        </div>

    </div>
  )
}

export default Charte