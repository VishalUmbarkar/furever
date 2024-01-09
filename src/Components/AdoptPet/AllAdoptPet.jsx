import './AdoptPet.css'
import { Link } from 'react-router-dom'

// For Data
import { AdoptPetData } from '../../Data'
import Button from '../Button/Button'
const AllAdoptPet = () => {
    const AdoptPetDataFetch = AdoptPetData.map((AdoptPetData_Main) => (
        <div className="col-lg-3" key={AdoptPetData_Main.id}>
            <div className="box">
                <Link to={AdoptPetData_Main.PetAdoptImg} target='_blank'>
                    <img src={AdoptPetData_Main.PetAdoptImg} className='img-fluid' alt={AdoptPetData_Main.PetAdoptName} />
                </Link>
                <div className="boxContent">
                    <h6>{AdoptPetData_Main.PetAdoptName}</h6>
                    <p>{AdoptPetData_Main.PetAdoptDescription}</p>
                    <Button LinkTo={`/AdoptPet/${AdoptPetData_Main.id}`} Btntext={"More Detail"} />
                    <Button LinkTo={"https://forms.gle/c46CP3SPsKbXKfAn7"} TargetChecking={"_blank"} Btntext={"Adopt Pet"} />
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className="row">
                {AdoptPetDataFetch}
            </div>
        </>
    )
}

export default AllAdoptPet