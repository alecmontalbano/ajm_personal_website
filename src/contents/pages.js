import { useLoader } from "@react-three/fiber"
import { Html } from "@react-three/drei";
import { TextureLoader, LinearFilter } from "three";
import { Block, useBlock } from "../components/blocks"
import Content from "../components/content";
import Stripe from "../components/stripe";
import Cross from "../components/cross";
import state from "../store";

export default function Pages() {
    const textures = useLoader(TextureLoader, state.images);
    // eslint-disable-next-line no-sequences
    const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture));
    const {contentMaxWidth, mobile } = useBlock();
    const aspect = 1.75;
    const pixelWidth = contentMaxWidth * state.zoom;
    return(
        <>
            <Block factor={1.5} offset={0}>
                <Content left map={img1}>
                    <Html style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
                        The substance can take you to heaven but it can also take you to hell.
                    </Html>
                </Content>
            </Block>
            <Block factor={2.0} offset={1}>
                <Content map={img2}>
                    <Html style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }} position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
                        We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance.
                    </Html>
                </Content>
            </Block>
            <Block factor={-1.0} offset={1}>
                <Stripe />
            </Block>
            <Block factor={1.5} offset={2}>
                <Content left map={img3}>
                    <Block factor={-0.5}>
                        <Cross />
                    </Block>
                    <Html prepend style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
                        Education and enlightenment.
                    </Html>
                </Content>
            </Block>
        </>
    );
}