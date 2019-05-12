  /**
   * This class define physics constants and calculated physics constants.
   *
   * Instanciation example : 
   * 
   * ```typescript
   * const instance = new CPhysicsConstants();
   * ```
   * 
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *  
   * @author Alain Deseine
   * 
   * @copyright CEI Alain Deseine 1992-2019
   * 
   * @beta 
   * 
   * Copyright (C) 2019 Alain Deseine
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
   * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
   * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   * 
   */

export class CConstant {
    public name: string;
    public symbol: string;
    public value: number;
    public unit: string;
    public description: string;

    /**
     * Constructor. 
     * 
     * The constructor of this class calculate calculated physics constants.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    constructor ( name: string, symbol: string, value: number, unit: string, description: string ) {
        // Set physics constants
        this.name           = name;
        this.symbol         = symbol;
        this.value          = value;
        this.unit           = unit;
        this.description    = description;
    } // eo constructor
} // eo CConstant class

export class CPhysicsConstants {

    [index: string]: any;
    public constants: CConstant[]   = [];

    /**
     * Constructor. 
     * 
     * The constructor of this class calculate calculated physics constants.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    constructor () {
        // Set physics constants
        this.constants.push( new CConstant( 'PI constant', 'π', Math.PI, 'None', '' ) );
        this.constants.push( new CConstant( 'Celerity', 'c', 299792458, 'm.s-1', 'Celerity of light in vaccum' ) );
        this.constants.push( new CConstant( 'Planck constant', 'h', 6.62607015e-34, 'J.s', 'The Planck constant is a physical constant that is the quantum of electromagnetic action, which relates the energy carried by a photon to its frequency' ) );
        this.constants.push( new CConstant( 'Boltzmann constant', 'k', 1.38064852e-23, 'J.K-1', 'The Boltzmann constant (kB or k) is a physical constant which relates the average relative kinetic energy of particles in a gas with the temperature of the gas and occurs in Planck\'s law of black-body radiation and in Boltzmann\'s entropy formula.' ) );
        this.constants.push( new CConstant( 'Gravitational constant', 'G', 6.67408e-11, 'N.m2.kg-2', 'Gravitational constant is an empirical physical constant involved in the calculation of gravitational effects in Isaac Newton\'s law of universal gravitation and in Albert Einstein\'s general theory of relativity.' ) ); // TODO Alain : Vérifier unité
        this.constants.push( new CConstant( 'Elementary charge','e', 1.602176634e-19, 'A.s', '' ) );
        this.constants.push( new CConstant( 'Coulomb','C', 1, 'A.s', '' ) );
        this.constants.push( new CConstant( 'Avogadro constant','NA', 6.022140857, 'mol-1', '' ) );
        this.constants.push( new CConstant( 'Standard acceleration','g', 9.80665, 'm.s-2', 'Standard acceleration due to gravity on earth' ) );
        this.constants.push( new CConstant( 'Bohr radius','a0', 0.52917721092, 'Å', 'The Bohr radius is approximately equal to the most probable distance between the nucleus and the electron in a hydrogen atom in its ground state. ' ) );
        this.constants.push( new CConstant( 'Ideal gas constant','R', 8.3144598, 'J.K-1.mol-1', '' ) );
        this.constants.push( new CConstant( 'Unified mass unit (dalton)','u', 1.660538921e-27, 'kg', 'Standard unit of mass that quantifies mass on an atomic or molecular scale' ) );
        this.constants.push( new CConstant( 'Vacuum permeability','µ0', 1.2566e-6, 'T.m.A-1', 'Vacuum permeability is the magnetic permeability in a classical vacuum.' ) );
        this.constants.push( new CConstant( 'Vacuum permittivity','ε0', 8.85418782e-12, 'F.m-1', 'Vacuum permittivity is an ideal, (baseline) physical constant, which is the value of the absolute dielectric permittivity of classical vacuum.' ) );
        this.constants.push( new CConstant( 'Impedance of free space','Z0', 376.730, 'Ω', 'The impedance of free space equals the product of the vacuum permeability μ0 and the speed of light in vacuum c0.' ) );
        this.constants.push( new CConstant( 'Astronomical unit','au', 149597870700, 'm', 'Astronomical unit is the distance from Earth to the Sun' ) );
        this.constants.push( new CConstant( 'Parsec','pc', 648000 / Math.PI * 149597870700, 'm', 'The parsec is a unit of length used to measure large distances to astronomical objects outside the Solar System. A parsec is defined as the distance at which one astronomical unit subtends an angle of one arcsecond,[1] which corresponds to 648000/π astronomical units.' ) );
        this.constants.push( new CConstant( 'Light year','lr', 9460730472580800, 'm', 'Light-year is the distance that light travels in vacuum in one Julian year (365.25 days).' ) );
        this.constants.push( new CConstant( 'Electronvolt','eV', 1.602176565e-19, 'J', '' ) );

        // Set physical quantities

        /** Solar system object mass */
        this.constants.push( new CConstant( 'Solar mass','M☉', 1.9884e30, 'kg', '' ) );
        this.constants.push( new CConstant( 'Earth mass','M⊕', 5.9722e24, 'kg', '' ) );
        this.constants.push( new CConstant( 'Lunar mass','ML', 7.342e22, 'kg', '' ) );
        this.constants.push( new CConstant( 'Jupiter mass','MJ', 1.8986e27, 'kg', '' ) );

        /** Solar system object radius */
        this.constants.push( new CConstant( 'Solar radius','R☉', 696342000, 'm', '' ) );
        this.constants.push( new CConstant( 'Earth radius','R⊕', 6378137, 'm', '' ) );
        this.constants.push( new CConstant( 'Lunar radius','RL', 1737400, 'm', '' ) );

        /** Particle mass */
        this.constants.push( new CConstant( 'Electron mass','ML', 9.10938291e-31, 'kg', '' ) );
        this.constants.push( new CConstant( 'Neutron mass','ML', 1.67493e-27, 'kg', '' ) );
        this.constants.push( new CConstant( 'Proton mass','ML', 1.672649e-27, 'kg', '' ) );


        this.constants.forEach( element => {
            this[element.symbol]    = element.value;
        });

    }

    /**
     * getConstantInfo method. 
     * 
     * this method simply log to the console class properties and methods.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public getConstantInfo( name: string ): any {
        return this.constants.find( i => i.symbol === name );
    } // eo getConstantInfo method


    /**
     * logConstants method. 
     * 
     * this method simply log to the console class properties and methods.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

     public logConstants(): void {
        console.log( this.constants );
    } // eo logConstants method


    /**
     * toJSON method. 
     * 
     * this method return the public and protected object properties.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public toJSON(): Object {
        let properties  = Object.getOwnPropertyNames( this );
        return properties;
    } // eo toJSON method


    /**
     * 
     * Conversion helpers
     * 
     */

    /**
     * unit of length conversion helpers
     */

    /**
     * meter2au method. 
     * 
     * this method convert meters to astronomical unit.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public meter2au( value: number ): number {
        return Math.round( value / this.au * 1000000 ) / 1000000;
    } // eo meter2au method


    /**
     * au2meter method. 
     * 
     * this method convert astronomical unit to meters.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public au2meter( value: number ): number {
        return value * this.au;
    } // eo au2meter method


    /**
     * au2kilometer method. 
     * 
     * this method convert astronomical unit to kilometers.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public au2kilometer( value: number ): number {
        return value * this.au / 1000;
    } // eo au2kilometer method


    /**
     * meter2pc method. 
     * 
     * this method convert meters to parsec.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public meter2pc( value: number ): number {
        return Math.round( value / this.pc * 1000000 ) / 1000000;
    } // eo meter2pc method


    /**
     * pc2meter method. 
     * 
     * this method convert parsec to meters.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public pc2meter( value: number ): number {
        return value * this.pc;
    } // eo pc2meter method


    /**
     * pc2kilometer method. 
     * 
     * this method convert parsec to kilometers.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public pc2kilometer( value: number ): number {
        return value * this.pc / 1000;
    } // eo pc2kilometer method


    /**
     * pc2au method. 
     * 
     * this method convert parsec to astronomical unit.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public pc2au( value: number ): number {
        return this.meter2au( this.pc2meter( value ) );
    } // eo pc2au method


    /**
     * au2pc method. 
     * 
     * this method convert astronomical unit to parsec.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public au2pc( value: number ): number {
        return this.meter2pc( this.au2meter( value ) );
    } // eo au2pc method


    /**
     * lr2pc method. 
     * 
     * this method convert light year unit to parsec.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public lr2pc( value: number ): number {
        return this.meter2pc( this.lr2meter( value ) );
    } // eo lr2pc method


    /**
     * lr2au method. 
     * 
     * this method convert light year to astronomical unit.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public lr2au( value: number ): number {
        return this.meter2au( this.lr2meter( value ) );
    } // eo lr2au method


    /**
     * lr2meter method. 
     * 
     * this method convert light year to meter.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public lr2meter( value: number ): number {
        return value * this.lr;
    } // eo lr2meter method


    /**
     * lr2kilometer method. 
     * 
     * this method convert light year to kilometer.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public lr2kilometer( value: number ): number {
        return value * this.lr / 1000;
    } // eo lr2kilometer method

    
    /**
     * meter2lr method. 
     * 
     * this method convert meter to light year.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public meter2lr( value: number ): number {
        return Math.round( value / this.lr * 1000000 ) / 1000000;
    } // eo meter2lr method


    /**
     * au2lr method. 
     * 
     * this method convert astronomical unit to light year.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public au2lr( value: number ): number {
        return this.meter2lr( this.au2meter( value ) );
    } // eo au2lr method


    /**
     * pc2lr method. 
     * 
     * this method convert parsec to light year.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public pc2lr( value: number ): number {
        return this.meter2lr( this.pc2meter( value ) );
    } // eo pc2lr method


    /**
     * unit of mass conversion helpers
     */


    
    /**
     * kg2ev method. 
     * 
     * this method convert kilogram to electronvolt.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public kg2ev( value: number ): number {
        return Math.round( ( value / this.eV * Math.pow( this.c, 2 ) ) * 1000000) / 1000000;
    } // eo kg2ev method


    /**
     * ev2kg method. 
     * 
     * this method convert kilogram to electronvolt using Albert Einstein formula E=mc2.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @beta
     */

    public ev2kg( value: number ): number {
        return value * this.eV / Math.pow( this.c, 2 );
    } // eo ev2kg method


}