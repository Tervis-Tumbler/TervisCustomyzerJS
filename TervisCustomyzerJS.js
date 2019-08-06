import {
    New_TervisAdobeScene7CustomyzerArtboardImageURL,
    New_TervisAdobeScene7URL,
    New_TervisAdobeScene7WrapDecoration3TimesURL,
    New_TervisAdobeScene7ProductVirtualURL
} from '@tervis/tervisadobescene7js'

export async function New_CustomyzerProjectProductVirtualURL ({
    $ProjectID,
    $Size,
    $FormType,
    $DecorationPositionXValue,
    $Width,
    $Height,
    $AsScene7SrcValue
}) {

    var $ElementPathsToShow = [
        "MAIN/GLARE"
    ]
    var $DecorationType
    if ($FormType === "SS") {
        $ElementPathsToShow.push(`MAIN/OUTER/SMOOTH/SS1`)
        $ElementPathsToShow.push(`MAIN/INNER/SMOOTH/SS1`)
        $DecorationType = "DPT"
    } else {
        if ($FormType !== "WAV") {
            $ElementPathsToShow.push(`MAIN/OUTER/SMOOTH/CL1`)
        } else {
            $ElementPathsToShow.push(`MAIN/OUTER/WAVY/CL1`)
        }
        $ElementPathsToShow.push(`MAIN/INNER/LINED/CL1`)
        $DecorationType = "WRA"
    }

    if ($FormType === "SIP") {
        $ElementPathsToShow.push(`MAIN/ACCESSORIES/LIDSIP/GY3`)
    } 
    
    if (($FormType === "SS" && $Size === 24) || ($FormType === "WB")) {
        $ElementPathsToShow.push(`MAIN/ACCESSORIES/LIDWB/GY1`)
    }

    var $ArtobardImageURL = New_TervisAdobeScene7CustomyzerArtboardImageURL({$ProjectID})
    var $RepeatedImageSource = New_TervisAdobeScene7URL({$AsScene7SrcValue: true, $ExternalURL: $ArtobardImageURL})
    
    var $DecorationSrc = New_TervisAdobeScene7WrapDecoration3TimesURL({
        $Size,
        $FormType,
        $AsScene7SrcValue: true,
        $DecorationType,
        $RepeatedImageSource
      })

    var $ProductVirtualURL = New_TervisAdobeScene7ProductVirtualURL({
        $Size,
        $FormType,
        $VignetteSuffix: 1,
        $DecorationType,
        $DecorationSrc,
        $DecorationPositionXValue,
        $ElementPathsToShow,
        $Width,
        $Height,
        $AsScene7SrcValue
    })

    return $ProductVirtualURL
}