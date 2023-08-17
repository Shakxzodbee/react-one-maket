const Formsd = () => {
    return (
        <>
            <div className="container mx-auto py-[10px] sm:px-[100px] px-[20px]  flex justify-between mt-[50px]">
                <div className="left shadow-lg px-[115px] py-[50px]">
                    <h1 className="text-center text-[30px] font-semibold">Form</h1>
                    <form>
                        <h1 className="text-[22px] font-normal mt-[20px]">Your Name</h1>
                        <input className="w-[400px] mt-[10px] h-[40px] pl-[20px] border-2 border-solid border-black" type="text" required placeholder="Name"/>
                        <h2 className="text-[20px] font-medium mt-[10px]">Choose a Continet</h2>
                        <select className="w-[400px] mt-[10px] text-[18px] font-medium">
                            <option className="font-medium" value="select">select</option>
                            <option className="font-medium" value="about">About</option>
                            <option className="font-medium" value="home">Home</option>
                            <option className="font-medium" value="form">form</option>
                        </select>
                        <h3 className="text-[20px] font-semibold mt-[10px]">Date of Birth</h3>
                        <input className="w-[400px] mt-[10px] text-[18px]" type="date" />
                        <h4 className="mt-[15px] text-[22px] font-semibold">Your Gender</h4>
                        <form className="mt-[15px]" action="page">
                            <input type="radio" />
                            <label className="text-[18px] font-semibold ml-[5px]" htmlFor="ml" name="prost" value="ml" id="ml">Male</label>
                            <input className="ml-[30px]" type="radio" />
                            <label className="text-[18px] font-semibold ml-[5px]" htmlFor="fr" name="prost" value="fr" id="fr">FerMale</label>
                        </form>
                        <div className="box">
                            <h4 className="mt-[15px] text-[20px] font-semibold">Enter Profile Picture</h4>
                            <input className="mt-[10px]" type="file" required />
                        </div>
                        <div className="box">
                            <input className="mt-[15px]" type="checkbox" required/>
                            <label className="ml-[5px] text-[17px] font-medium" htmlFor="">I consent to my Personal data</label>
                        </div>
                        <button className="w-[400px] text-[24px] h-[50px] bg-blue-500 rounded-lg text-[#fff] mt-[15px]" type="submit">Submit</button>
                    </form>
                </div>
                <div className="right">
                    <h1 className="text-[30px] text-[black] font-medium text-center mb-[14px]">Personal information</h1>
                    <span className="text-[18px] font-semibold">No information. Create them yourself  :)</span>
                </div>
            </div>
        </>
    )
}
export default Formsd