import Typography from "@mui/material/Typography";
import HBPage from "../../../../Components/Layout/HBPage.tsx";
import HBFeature from "../../../../Components/HBFeature.tsx";




const Weapons: React.FC = () => {



    return(
        <HBPage>

        <Typography variant="h3">Weapons</Typography>

        <Typography>
            All weapons have a Weapon Bonus. When wielding a melee
            weapon, you add its Weapon Bonus to your Might or Martial
            Arts rank when making close combat attacks, and you add
            its Weapon Bonus to your Agility or Martial Arts rank when
            defending yourself against close combat attacks. When wielding
            a ranged weapon, you add its Weapon Bonus to your Agility
            when attacking in ranged combat.
            Most weapons inflict lethal damage, but an “(s)” after the
            Weapon Bonus means the weapon inflicts subdual damage.
            Ancient and modern weapons inflict physical damage. Most
            advanced weapons inflict energy damage, but “Stun” and “Vibro”
            weapons inflict physical damage. Ranged weapons can be used
            at up to Distant Range unless they have a feature like Line of
            Sight or Thrown.
        </Typography>



        <Typography variant="h4">Weapon Features</Typography>
        <HBFeature label="Area/Burst">These features work like the Pros of the same name.
            For ease of reference, you can assume that all Burst weapons
            have a 30-foot diameter area of effect, except for Stun Grenades
            and Entangler Grenades, which have a 15-foot diameter area
            of effect.</HBFeature>
        <HBFeature label="Armor Piercing">This feature works like the Pro of the same
            name.</HBFeature>
        <HBFeature label="Binding">The weapon is used to capture targets rather than hurt
            them. Although the weapon doesn’t inflict damage, it can still be
            used to perform grabs, holds, and combat stunts.</HBFeature>
        <HBFeature label="Braced">The weapon is too heavy to use effectively unless
            braced or mounted on something. If you have at least 6d
            Might, however, you’re perfectly capable of using this weapon
            in two hands.</HBFeature>
        <HBFeature label="Dazzle">The weapon works like a version of the Dazzle Power
            with a Power rank equal to your attack rank (your Trait plus the
            item’s Weapon Bonus).</HBFeature>
        <HBFeature label="Ensnare">The weapon delivers an attack that works like the
            Ensnare Power with a Power rank equal to your attack rank (your
            Trait plus the item’s Weapon Bonus).</HBFeature>
        <HBFeature label="Flexible">The weapon is flexible, like a chain or whip, and can
            be used to perform grabs, holds, and combat stunts as well as
            to inflict damage.</HBFeature>
        <HBFeature label="Irritant">The weapon works like a version of the Irritant Power
            with a Power rank of 3d plus your net successes on an Easy (0)
            attack roll (using your Agility plus the item’s Weapon Bonus).</HBFeature>
        <HBFeature label="Launcher">The weapon fires grenades. Select the grenades
            separately. Although they have identical statistics for game pur-
            poses, these grenades aren’t the same as those tossed by hand.</HBFeature>
        <HBFeature label="Line of Sight">This feature works like the Pro of the same name.</HBFeature>
        <HBFeature label="Penetrating">This feature works like the Pro of the same name.</HBFeature>
        <HBFeature label="Readied">This feature works like the Con of the same name.</HBFeature>
        <HBFeature label="Shield">The weapon serves as a shield and provides a +1d
            Shield Bonus.</HBFeature>
        <HBFeature label="Shock">The weapon inflicts damage and also delivers a carrier
            attack that works like the Stun Power with a Power rank equal
            to your attack rank (your Trait plus the item’s Weapon Bonus).</HBFeature>
        <HBFeature label="Stun">The weapon does not inflict damage, but it delivers an
            attack that works like the Stun Power with a Power rank equal
            to your attack rank (your Trait plus the item’s Weapon Bonus).</HBFeature>
        <HBFeature label="Thrown">The weapon can be thrown at targets within Close
            Range (or farther, depending on how strong you are, as discussed
            in Chapter 4). When dealing with small ranged weapons like
            grenades or throwing stars, you carry enough to avoid worrying
            about running out in the middle of a scene.</HBFeature>
        <HBFeature label="Two-Handed">This feature works like the Con of the same name.</HBFeature>
        <HBFeature label="Versatile">The weapon can be used in one or two hands.
            Increase the item’s Weapon Bonus by 1d when wielding the
            weapon in two hands, as this affords you more power and
            better control.</HBFeature>

        </HBPage>
    )
}

export default Weapons;