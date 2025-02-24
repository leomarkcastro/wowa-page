from PIL import Image
import numpy as np
from typing import Optional

def convert_black_to_white(image_path: str, output_path: str, threshold: int = 50) -> Optional[bool]:
    """
    Convert black-ish text to white in an image while preserving transparency
    
    Args:
        image_path (str): Path to input image
        output_path (str): Path to save modified image
        threshold (int): RGB threshold to determine what is considered "black-ish"
    
    Returns:
        bool: True if successful, None if an error occurred
    
    Raises:
        ValueError: If threshold is not between 0 and 255
    """
    if not 0 <= threshold <= 255:
        raise ValueError("Threshold must be between 0 and 255")
        
    try:
        # Open the image
        img = Image.open(image_path)
        
        # Validate image dimensions
        if img.size[0] * img.size[1] == 0:
            raise ValueError("Image has invalid dimensions")
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Convert to numpy array for faster processing
        img_array = np.array(img)
        
        # Find pixels where RGB values are below threshold (black-ish)
        black_pixels = np.all(img_array[:, :, :3] < threshold, axis=2)
        
        # Create a white RGBA array with original alpha
        white_pixels = np.zeros_like(img_array)
        white_pixels[..., :3] = 255  # Set RGB to white
        white_pixels[..., 3] = img_array[..., 3]  # Keep original alpha
        
        # Apply the changes only to black pixels
        img_array[black_pixels] = white_pixels[black_pixels]
        
        # Convert back to PIL Image
        result = Image.fromarray(img_array)
        
        # Save the modified image with transparency
        result.save(output_path, format='PNG')
        return True
        
    except (IOError, OSError) as e:
        print(f"Error processing image: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

if __name__ == "__main__":
    input_path = "./public/text-logo.png"
    output_path = "./public/text-logo-white.png"
    if convert_black_to_white(input_path, output_path) is None:
        print("Failed to convert image")